import { Flex, rem, Dropzone, DropzoneProps, IMAGE_MIME_TYPE, MIME_TYPES } from '@repo/ui';
import { IconUpload, IconPhoto, IconX, Text } from '@repo/ui';


export function BusinessRegistrationUpload(props: Partial<DropzoneProps>) {
  return (
  <Flex direction={'column'} >
    <Text size='md' >사업자 등록증 업로드</Text>
    <Dropzone
      radius={'md'}
      p='sm'
      style={{ border : '2px var(--mantine-color-gray-5) dashed', borderRadius : 'var(--mantine-radius-md)' }}
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      accept={[...IMAGE_MIME_TYPE, MIME_TYPES.pdf]}
      {...props}
    >
      <Flex gap={'sm'}  align={'center'} >
        <Dropzone.Accept>
          <IconUpload
            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
            stroke={1.5}
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
            stroke={1.5}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPhoto
            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
            stroke={1.5}
          />
        </Dropzone.Idle>
        <Flex direction={'column'} >
          <Text size="md"> 파일을 끌어다 놓거나 클릭하세요.</Text>
          <Text size="xs" c="dimmed" >사업자등록증을 등록하세요. 이미지 파일과 </Text>
        </Flex>
      </Flex>
    </Dropzone>
  </Flex>

  );
}
