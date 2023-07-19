export type UserProps = {
  id: number | string,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
  address: AddressProps,
  company: CompanyProps
}

type AddressProps = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: GeolocationProps
}

type GeolocationProps = {
  lat: string,
  lng: string
}

type CompanyProps = {
  name: string,
  catchPhrase: string,
  bs: string
}