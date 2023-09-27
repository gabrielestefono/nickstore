import Banner_Principal from '@/components/index/Banner_Principal'
import Categoria from '@/components/index/Categorias'
import Produtos from '@/components/index/Produtos'
import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <>
        <Banner_Principal/>
        <Categoria/>
        <Produtos/>
    </>
  )
}
