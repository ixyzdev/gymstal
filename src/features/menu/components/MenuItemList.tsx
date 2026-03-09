import { MenuItem, MenuItemProps } from './MenuItem'

type MenuItemListItem = MenuItemProps & {
  id: string
}

type Props = {
  items: MenuItemListItem[]
}

export function MenuItemList({ items }: Props) {
  return (
    <>
      {items.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </>
  )
}
