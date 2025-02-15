export interface IStructuralSettings {
  domain: {
    lSystem: string;
    geometry: {
      local: string;
      shape: string;
    }
  }

  application: {
    stack: string;
    interpreter: string;
  }

  adapters: {
    dom: string;
    graphics: {
      context: string;
      drawer: string;
    }
  }

  launchingApp: string;
}
