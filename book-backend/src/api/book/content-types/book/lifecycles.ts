function cleanText(input: string): string {
  return input.replace(/\s+/g, ' ').trim();
}

function normalizeISBN(isbn: string): string {
  return isbn.replace(/\D/g, '');
}

function removeLineBreaks(str: Record<string, any>) {
  Object.keys(str).forEach((key) => {
    if (typeof str[key] === 'string') {
      str[key] = cleanText(str[key]);
    }
  });
}

function normalizeBookData(data: Record<string, any>) {
  removeLineBreaks(data);
  if (data.isbn) {
    data.isbn = normalizeISBN(data.isbn);
  }
  if (!data.cover) {
    data.cover = {
      id: 1,
    }
  }
}

// TODO: Also handle beforeCreateMany, afterUpdateMany
export default {
  beforeCreate(event: any) {
    const {data} = event.params;
    normalizeBookData(data);
  },
  beforeUpdate(event: any) {
    const {data} = event.params;
    normalizeBookData(data);
  },
}
