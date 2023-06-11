import { Box, Grid, GridItem } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <Grid
    templateAreas={{
      base: `"main" "footer"`,
      lg: `"main" "footer"`,
    }}
    templateColumns={{
      base: '1fr',
      lg: '1fr',
    }}
  >
    <GridItem bg='green.300' area="main">
      <Box paddingLeft={2}>
      main
      </Box>
    </GridItem>
    <GridItem bg='blue.300' area="footer">
      Footer
    </GridItem>
  </Grid>
  )
}

export default HomePage