import { SetMetadata } from '@nestjs/common';

const PUBLIC_KEY = 'isPublic';
export const SkipAuth = () => SetMetadata(PUBLIC_KEY, true);
