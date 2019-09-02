
export class Repos {
  public id: number;
  public name: string;
  public description: string;
  public license: License;
  public created_at: string;
  public updated_at: string;
}

export class License {
  public key: string;
  public name: string;
  public url: string;
}
