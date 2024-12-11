const config = {
  url: "https://holamundo.io",
  direccion: {
    calle: "hola mundo",
    numero: 80,
  },
};

function webServer({ url, ...rest }) {
  console.log(rest);
  //const url = config.url;
  //const { url } = config;
  //De nuestro objeto de configuración toma solo la propiedad de url
  return url;
}

console.log(webServer(config));

const config2 = ["https://holamundo.io", 145, 80];

function webServer2([url, ...rest]) {
  console.log(rest);
  //const [url, bucket, port] = config2;
  return url;
}

console.log(webServer2(config2));
