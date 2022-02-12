import { ICompany, IUser } from '~/utils/types'

export const state = (): {
  companies: ICompany[]
  user: IUser | null
} => ({
  companies: [
    {
      id: '1',
      company: {
        name: 'catalog',
        url: 'catalogapp.io',
        icon: '/icons/catalog.svg',
      },
      licenseUse: 70,
      users: [
        '/avatars/1.jpg',
        '/avatars/2.jpg',
        '/avatars/3.jpg',
        '/avatars/4.jpg',
        '/avatars/5.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
      ],
      status: 'customer',
      about: {
        snippet: 'Content curating app',
        description: 'Brings all your news into one place',
      },
    },
    {
      id: '2',
      company: {
        name: 'circooles',
        url: 'getcircooles.com',
        icon: '/icons/circooles.svg',
      },
      licenseUse: 60,
      users: [
        '/avatars/3.jpg',
        '/avatars/1.jpg',
        '/avatars/4.jpg',
        '/avatars/5.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
      ],
      status: 'churned',
      about: {
        snippet: 'Design software',
        description: 'Super lightweight design app',
      },
    },
    {
      id: '3',
      company: {
        name: 'command+r',
        url: 'cmdr.ai',
        icon: '/icons/command+r.svg',
      },
      licenseUse: 30,
      users: [
        '/avatars/1.jpg',
        '/avatars/4.jpg',
        '/avatars/5.jpg',
        '/avatars/2.jpg',
        '/avatars/3.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
      ],
      status: 'customer',
      about: {
        snippet: 'Data prediction',
        description: 'AI and machine learning data',
      },
    },
    {
      id: '4',
      company: {
        name: 'hourglass',
        url: 'hourglass.app',
        icon: '/icons/hourglass.svg',
      },
      licenseUse: 85,
      users: [
        '/avatars/1.jpg',
        '/avatars/2.jpg',
        '/avatars/3.jpg',
        '/avatars/4.jpg',
        '/avatars/5.jpg',
      ],
      status: 'customer',
      about: {
        snippet: 'Productivity app',
        description: 'Time management and productivity',
      },
    },
    {
      id: '5',
      company: {
        name: 'layers',
        url: 'getlayers.io',
        icon: '/icons/layers.svg',
      },
      licenseUse: 25,
      users: [
        '/avatars/5.jpg',
        '/avatars/2.jpg',
        '/avatars/3.jpg',
        '/avatars/1.jpg',
        '/avatars/4.jpg',
        '/avatars/2.jpg',
      ],
      status: 'churned',
      about: {
        snippet: 'Web app integrations',
        description: 'Connect web apps seamlessly',
      },
    },
    {
      id: '6',
      company: {
        name: 'quotient',
        url: 'quotient.co',
        icon: '/icons/quotient.svg',
      },
      licenseUse: 60,
      users: [
        '/avatars/2.jpg',
        '/avatars/3.jpg',
        '/avatars/4.jpg',
        '/avatars/1.jpg',
        '/avatars/5.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
      ],
      status: 'customer',
      about: {
        snippet: 'Sales CRM',
        description: 'Web-based sales doc management',
      },
    },
    {
      id: '7',
      company: {
        name: 'sisyphus',
        url: 'sisyphus.com',
        icon: '/icons/sisyphus.svg',
      },
      licenseUse: 40,
      users: [
        '/avatars/3.jpg',
        '/avatars/4.jpg',
        '/avatars/5.jpg',
        '/avatars/1.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
        '/avatars/2.jpg',
      ],
      status: 'customer',
      about: {
        snippet: 'Automation and workflow',
        description: 'Time tracking, invoicing and expenses',
      },
    },
  ],
  user: {
    firstName: 'Olivia',
    lastName: 'Ananiah',
    avatar: '/others/avatar.jpg',
    createdAt: new Date().toISOString(),
    id: Date.now().toLocaleString(),
  },
})

// export const getters = {
//   getProductById: (state: any) => (id: number) => {
//     return state.products.find((product: IProduct) => id === product.id)
//   },
// }

// export const mutations = {
//   addItem: (state: any, id: number) => {
//     const item = state.products.find((product: IProduct) => id === product.id)
//     state.myItems.push(item)
//   },
// }

//  computed: {
//     product() {
//       return this.$store.getters.getProductById(Number(this.$route.params.id))
//     },
//   },
//   methods: {
//     toggleShowModal() {
//       this.showModal = !this.showModal
//     },
//     ...mapMutations(['addItem']),
//   },

// <img
//   v-for="(user, index) in row.users.slice(0, 4)"
//   :key="user"
//   :src="user"
//   :style="`left: ${index * 20}px`"
//   class="absolute h-6 w-6 rounded-full border-1.5"
// />
