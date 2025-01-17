import { Role } from '@prisma/client';

import { UserWithSettings } from './interfaces';

export const permissions = {
  accessAdminControl: 'accessAdminControl',
  accessFearAndGreedIndex: 'accessFearAndGreedIndex',
  createAccess: 'createAccess',
  createAccount: 'createAccount',
  createOrder: 'createOrder',
  createUserAccount: 'createUserAccount',
  deleteAccess: 'deleteAccess',
  deleteAccount: 'deleteAcccount',
  deleteAuthDevice: 'deleteAuthDevice',
  deleteOrder: 'deleteOrder',
  deleteUser: 'deleteUser',
  enableImport: 'enableImport',
  enableBlog: 'enableBlog',
  enableSocialLogin: 'enableSocialLogin',
  enableStatistics: 'enableStatistics',
  enableSubscription: 'enableSubscription',
  enableSystemMessage: 'enableSystemMessage',
  toggleReadOnlyMode: 'toggleReadOnlyMode',
  updateAccount: 'updateAccount',
  updateAuthDevice: 'updateAuthDevice',
  updateOrder: 'updateOrder',
  updateUserSettings: 'updateUserSettings',
  updateViewMode: 'updateViewMode'
};

export function getPermissions(aRole: Role): string[] {
  switch (aRole) {
    case 'ADMIN':
      return [
        permissions.accessAdminControl,
        permissions.createAccess,
        permissions.createAccount,
        permissions.createOrder,
        permissions.deleteAccess,
        permissions.deleteAccount,
        permissions.deleteAuthDevice,
        permissions.deleteOrder,
        permissions.deleteUser,
        permissions.updateAccount,
        permissions.updateAuthDevice,
        permissions.updateOrder,
        permissions.updateUserSettings,
        permissions.updateViewMode
      ];

    case 'DEMO':
      return [permissions.createUserAccount];

    case 'USER':
      return [
        permissions.createAccess,
        permissions.createAccount,
        permissions.createOrder,
        permissions.deleteAccess,
        permissions.deleteAccount,
        permissions.deleteAuthDevice,
        permissions.deleteOrder,
        permissions.updateAccount,
        permissions.updateAuthDevice,
        permissions.updateOrder,
        permissions.updateUserSettings,
        permissions.updateViewMode
      ];

    default:
      return [];
  }
}

export function hasPermission(
  aPermissions: string[] = [],
  aPermission: string
) {
  return aPermissions.includes(aPermission);
}

export function hasRole(aUser: UserWithSettings, aRole: Role): boolean {
  return aUser?.role === aRole;
}
