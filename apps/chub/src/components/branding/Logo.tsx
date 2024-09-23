import { ActionIcon, ActionIconProps, IconCopyrightFilled } from '@repo/ui';

export function Logo(  props : ActionIconProps  ) {
    return false &&
        <ActionIcon w='30px' h='30px' {...props} variant="transparent"  >
            <IconCopyrightFilled style={{ width: '100%', height: '100%' }} stroke={1.5} />
        </ActionIcon>
}