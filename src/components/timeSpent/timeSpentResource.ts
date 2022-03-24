import apiService from '../../api/apiService';
import { TimeSpent } from './timeSpent.type';

export default class TimeSpentResource {
  private api

  constructor() {
    this.api = apiService
  }

  public getTimeSpents = (): Promise<TimeSpent[]> => {
    return this.api.get('/')
  }

  public createTimeSpent = (body: {}): Promise<TimeSpent> => {
    return this.api.post('/', body)
  }

  public updateTimeSpent = (body: {}): Promise<TimeSpent> => {
    return this.api.post('/', body)
  }
}