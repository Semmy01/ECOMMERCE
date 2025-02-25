import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cartPage')({
  component: cartPage,
})

function cartPage() {
  return <div>Hello from cart page</div>
}
