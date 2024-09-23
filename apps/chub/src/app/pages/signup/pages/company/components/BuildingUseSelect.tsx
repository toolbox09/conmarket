import { Flex, Text, Grid, Checkbox } from '@repo/ui';


export function BuildingUseSelect() {
  return (
  <Flex direction={'column'} gap='md' >
    <Text size='md' >사업자 등록증 업로드</Text>
    <Grid columns={24} >
      <Grid.Col span={12}><Checkbox size='md' label='단독주택' /> </Grid.Col>
      <Grid.Col span={12}><Checkbox size='md' label='다세대/다가구' /> </Grid.Col>
      <Grid.Col span={12}><Checkbox size='md' label='상가건물' /> </Grid.Col>
      <Grid.Col span={12}><Checkbox size='md' label='업무시설' /> </Grid.Col>
    </Grid>
  </Flex>
  );
}
