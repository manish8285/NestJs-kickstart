import { Body, Controller, Post, Param, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomLogger } from 'utils/logger/custom-logger.service';
import { Authority } from '../../middleware/authority.decorator';
import { RoleService } from './role.service';
import { RoleReqDto, RoleResDto, AssignPermissionsToRoleDto } from 'utils';

@ApiTags('Role')
@Controller()
export class RoleController {
  constructor(
    private readonly roleService: RoleService,
    private readonly logger: CustomLogger,
  ) {}

  @ApiResponse({
    status: 200,
    description: 'user created',
    type: RoleResDto,
  })
  @Post('roles')
  @Authority('CREATE_ROLE')
  async create(@Body() roleReqDto: RoleReqDto) {
    return this.roleService.create(roleReqDto);
  }

  @ApiBearerAuth('access-token') //edit here
  @Post('roles/:roleId/permissions')
  @Authority('ASSIGN_PERMISSION')
  async assignPermissionToRole(
    @Param('roleId') roleId: number,
    @Body() permissionIds: AssignPermissionsToRoleDto,
  ) {
    return this.roleService.assignPermissionsToRole(roleId, permissionIds);
  }

  @ApiResponse({
    type: [RoleResDto],
  })
  @Get('roles/:roleId')
  async getRoles(@Param('roleId') roleId: number) {
    return this.roleService.getRole(roleId);
  }
}
