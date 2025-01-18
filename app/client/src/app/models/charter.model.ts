export interface Charter {
  id: number;
  boatId: number;
  usrId: number;
  startDate: Date;
  endDate: Date;
  name?: string;
  description?: string;
  port?: string;
}
