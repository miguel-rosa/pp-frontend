
type Address = {
  line1:string
  city:string
  state:string
  postal_code:string
  country:string
}
export type User = {
    id: string
    email: string
    first_name: string
    last_name: string
    address: Address
    masked_phone: string
    shipping: {
        name:string
        address: Address
    }
}