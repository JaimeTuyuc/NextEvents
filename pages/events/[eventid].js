import EventContent from '@/components/event-detail/event-content'
import EventLogistics from '@/components/event-detail/event-logistics'
import EventSummary from '@/components/event-detail/event-summary'
import ErrorAlert from '@/components/ui/error-alert'
import { getEventById } from '@/dummy-data'
import { useRouter } from 'next/router'

const EventDetailPage = () => {
  const router = useRouter()

  const { eventid } = router.query
  const event = getEventById(eventid)

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p className='center'>No Events found!</p>
        </ErrorAlert>
      </>
    )
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />

      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  )
}

export default EventDetailPage
