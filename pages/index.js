import Layout from '../components/Layout'
import BestSellers from '../components/BestSellers'
import GetThemNow from '../components/GetThemNow'
import ShopProducts from '../components/ShopProducts'
import DiscoverMore from '../components/DiscoverMore'

export default function Home() {
  return (
    <Layout criteria={true}>
      <BestSellers />
      <GetThemNow />
      <ShopProducts />
      <DiscoverMore />
    </Layout>
  )
}
