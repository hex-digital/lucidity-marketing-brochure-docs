import { NotificationError } from '../../errors/NotificationError';

export class SlackConfigError extends NotificationError {
  constructor(message: string) {
    super(message);
    this.name = 'SlackConfigError';
  }
}
