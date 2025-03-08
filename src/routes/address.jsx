import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/address')({
  component: contactDetails,
})

function contactDetails() {
  return <div>Hello from contact</div>
}
