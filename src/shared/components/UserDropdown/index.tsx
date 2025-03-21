import { Avatar, DropdownMenu, Text,  } from '@istic-ui/react'
import { useAuth } from '@shared/authentication/context'

function UserDropdown() {
  const { user, signOut } = useAuth()

  return (
    <DropdownMenu
      position="center"
      align="full-bottom"
      mainItem={
        <button className="h-full">
          <div className="flex w-full items-center justify-between gap-3">
            <Avatar size="xs" />
            <div className="flex flex-col items-start">
              <Text weight="medium" size="xs" color="text-neutral-800">
                {user?.name}
              </Text>
              <Text weight="regular" size="xs" color="text-neutral-600">
                Administrador
              </Text>
            </div>
          </div>
        </button>
      }
      items={[
        {
          id: 'logout',
          iconName: 'logout',
          label: 'Sair',
          onClick: () => signOut?.(),
        }
      ]}
    >
    
      
    </DropdownMenu>
  )
}

export default UserDropdown
