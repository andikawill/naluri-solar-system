import { PiService } from './pi.service';

describe('PiService', () => {
  let service: PiService;

  beforeEach(() => {
    jest.useFakeTimers();
    service = new PiService();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return initial pi data', () => {
    const result = service.getPi();
    expect(result).toHaveProperty('pi');
    expect(result).toHaveProperty('terms');
    expect(result).toHaveProperty('updatedAt');
    expect(typeof result.pi).toBe('number');
    expect(typeof result.terms).toBe('number');
    expect(typeof result.updatedAt).toBe('string');
  });

  it('should calculate and update pi over time', () => {
    const initial = service.getPi();

    jest.advanceTimersByTime(3000);

    const updated = service.getPi();
    expect(updated.terms).toBeGreaterThan(initial.terms);
    expect(updated.pi).not.toBe(initial.pi);
  });
});
