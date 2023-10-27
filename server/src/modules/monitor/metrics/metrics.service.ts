import { Injectable } from '@nestjs/common';
import { PrometheusService } from '../prometheus/prometheus.service';
import { HealthService } from '../health/health.service';

@Injectable()
export class MetricsService {
  public get metrics(): Promise<string> {
    this.healthService.check();
    return this.promClientService.metrics;
  }

  constructor(
    private promClientService: PrometheusService,
    private healthService: HealthService,
  ) {}
}
