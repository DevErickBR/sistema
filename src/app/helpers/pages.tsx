import { PageCustom } from '@/types/page'
import * as Icons from 'react-icons/fa6'

const pages: PageCustom[] = [
    {
        href: "/clientes",
        title: "Clientes",
        Icon: Icons.FaUsers
    },
    {
        href: "/recibos",
        title: "Recibos",
        Icon: Icons.FaMoneyCheck
    },
    {
        href: "/financeiro",
        title: "Financeiro",
        Icon: Icons.FaMoneyBills
    },

]

export default pages;