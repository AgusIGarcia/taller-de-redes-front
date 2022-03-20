var AccionesHTTP = {
  GET: "GET",
  POST: "POST",
};

class API {
  constructor() {
    this.ipBackend = "http://54.197.19.122";
    this.corsAnywhere = "https://cors-anywhere.herokuapp.com/";
    this.lista = [];
  }

  async getLista() {
    let endpoint = "/personas",
      url = this.corsAnywhere + this.ipBackend + endpoint,
      resultado = await this.peticion(url, null, AccionesHTTP.GET);
    this.lista = resultado;
    return this.lista;
  }

  async createPersona(persona) {
    let endpoint = "/personas",
      url = this.corsAnywhere + this.ipBackend + endpoint;
    await this.peticion(url, persona, AccionesHTTP.POST);
  }

  async peticion(url, objeto, accion) {
    let method = accion === AccionesHTTP.GET ? "GET" : "POST",
      body = objeto === null ? null : JSON.stringify(objeto);
    let resultadoConsulta = await fetch(url, {
      method: method,
      mode: "cors",
      async: true,
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
      },
      body: body,
    });

    return await accion === AccionesHTTP.GET ? resultadoConsulta.json() : null;
  }
}

export default API;
