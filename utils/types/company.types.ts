export interface ICompany {
  id: string
  company: {
    name: string
    url: string
    icon: string
  }
  licenseUse: number
  status: 'customer' | 'churned'
  users: string[]
  about: {
    snippet: string
    description: string
  }
}
