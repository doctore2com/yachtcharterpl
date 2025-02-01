import { CharterUser } from './charter-user.model';
import { Boat } from './boat.model';

export interface Charter {
  id?: number;
  charterName: string;
  description?: string;
  startCharter: Date;
  endCharter: Date;
  port: string;
  user: CharterUser;
  boat: Boat;
}
