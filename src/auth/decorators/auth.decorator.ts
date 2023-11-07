import { SetMetadata } from '@nestjs/common';

const PUBLIC_KEY = 'isPublic';
export const skipAuth = () => SetMetadata(PUBLIC_KEY, true);
