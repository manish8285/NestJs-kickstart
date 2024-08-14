import { Injectable } from '@nestjs/common';
import { CustomLogger } from 'utils/logger/custom-logger.service';
import { IPermission } from './permission.interface';
import { PermissionReqDto, PermissionResDto } from 'utils';
import { Permission, PermissionRepository } from 'models';

@Injectable()
export class PermissionService {
  constructor(
    private readonly permissionRepo: PermissionRepository,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext('PermissionService');
  }

  async create(permissionDto: PermissionReqDto): Promise<IPermission> {
    let permission: Permission =
      PermissionReqDto.transformToEntity(permissionDto);
    permission = await this.permissionRepo.createOne(permission);
    return PermissionResDto.transform(permission);
  }
}
