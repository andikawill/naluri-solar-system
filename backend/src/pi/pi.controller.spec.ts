import { Test, TestingModule } from '@nestjs/testing';
import { PiController } from './pi.controller';
import { PiService } from './pi.service';

describe('PiController', () => {
  let controller: PiController;
  let service: PiService;

  const mockPiData = {
    pi: 3.14159,
    terms: 100,
    updatedAt: '2025-05-28T10:00:00.000Z',
  };

  const mockPiService = {
    getPi: jest.fn().mockReturnValue(mockPiData),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PiController],
      providers: [{ provide: PiService, useValue: mockPiService }],
    }).compile();

    controller = module.get<PiController>(PiController);
    service = module.get<PiService>(PiService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return pi data from the service', () => {
    const result = controller.getPi();
    expect(result).toEqual(mockPiData);
    expect(service.getPi).toHaveBeenCalled();
  });
});
