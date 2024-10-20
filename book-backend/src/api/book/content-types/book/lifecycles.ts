function removeLineBreaks(str: Record<string, any>) {
  Object.keys(str).forEach((key) => {
    if (typeof str[key] === 'string') {
      str[key] = str[key].replace(/(\r\n|\n|\r)/gm, ' ');
    }
  });
}

// TODO: Also handle beforeCreateMany, afterUpdateMany
// TODO: Remove dashes from the ISBN
export default {
  beforeCreate(event: any) {
    const {data} = event.params;
    console.log('beforeCreate', data);
    removeLineBreaks(data);
    if (!data.cover) {
      data.cover = {
        id: 2,
      }
    }
  },
  beforeUpdate(event: any) {
    const {data} = event.params;
    removeLineBreaks(data);
  },
}
