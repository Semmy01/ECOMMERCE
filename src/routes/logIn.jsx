import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/logIn')({
  component: logIn,
})

function logIn() {
  return (
  <section className='login-section'>
    <div>
      hello
    </div>
  </section>
  )
}
