import { Avatar, DropdownMenu, Icon, Text } from '@istic-ui/react'
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
    >
      <div className="w-[140px] bg-white rounded-md shadow-md">
        <button
          className="w-full flex flex-row justify-start items-center gap-2 p-4 text-left hover:bg-neutral-50 rounded-xl text-error"
          type="button"
          onClick={async () => {
            signOut && (await signOut())
          }}
        >
          <Icon name="logout" color="inherit" size={20} />
          <Text size="sm" color="text-inherit">
            Sair
          </Text>
        </button>
      </div>
    </DropdownMenu>
  )
}

export default UserDropdown
