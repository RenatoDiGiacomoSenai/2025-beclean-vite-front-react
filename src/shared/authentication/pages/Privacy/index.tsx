import { createRoute, Link } from '@tanstack/react-router'
import { PublicRoutes } from '@shared/layouts/PublicLayout'

import { LOGIN_PAGE_ROUTE } from '../Login'

function PrivacyPage() {
  return (
    <div className="p-2">
      <div className="bg-white p-4 flex flex-col gap-4 rounded-md max-h-[600px] overflow-y-auto">
        <h1 className="text-2xl font-bold">Política de Privacidade</h1>
        <p>
          Sua privacidade é importante para nós. Esta política de privacidade
          explica quais informações pessoais coletamos e como as usamos.
        </p>
        <h2 className="text-xl font-semibold">Informações que coletamos</h2>
        <p>
          Coletamos informações que você nos fornece diretamente, como quando
          você cria uma conta, atualiza seu perfil ou usa nossos serviços.
        </p>
        <h2 className="text-xl font-semibold">Como usamos suas informações</h2>
        <p>
          Usamos suas informações para fornecer, manter e melhorar nossos
          serviços, bem como para proteger nossos usuários.
        </p>
        <h2 className="text-xl font-semibold">
          Compartilhamento de informações
        </h2>
        <p>
          Não compartilhamos suas informações pessoais com terceiros, exceto
          conforme descrito nesta política de privacidade.
        </p>
        <h2 className="text-xl font-semibold">Segurança</h2>
        <p>
          Tomamos medidas para proteger suas informações pessoais contra acesso
          não autorizado, uso ou divulgação.
        </p>
        <h2 className="text-xl font-semibold">Alterações nesta política</h2>
        <p>
          Podemos atualizar esta política de privacidade periodicamente.
          Notificaremos você sobre quaisquer alterações publicando a nova
          política nesta página.
        </p>
        <p>
          Se você tiver alguma dúvida sobre esta política de privacidade, entre
          em contato conosco.
        </p>
        <Link to={LOGIN_PAGE_ROUTE} className="text-brand-500 font-bold">
          Voltar para o login
        </Link>
      </div>
    </div>
  )
}

export const PRIVACY_PAGE_ROUTE = '/privacy'

export const PrivacyRoute = createRoute({
  path: PRIVACY_PAGE_ROUTE,
  getParentRoute: () => PublicRoutes,
  component: PrivacyPage,
})
