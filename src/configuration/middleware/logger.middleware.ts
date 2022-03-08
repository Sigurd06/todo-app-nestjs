import { LoggerService } from '../logger/logger.service';

export function LoggerMiddleware(req, res, next) {
  // logger.debug(`📢  ${req.headers['user-agent']}`)
  const logger = new LoggerService();

  logger.debug('Bootstrap', `📢 ${req.headers['user-agent'].split(') ')[0]})`);
  next();
}
