export interface Charter {
  id?: number;
  boat: {
    id: number;
  }
  user: {
    id: number;
  }
  startCharter: string;
  endCharter: string;
  name: string;
  description?: string;
  port?: string;
}
