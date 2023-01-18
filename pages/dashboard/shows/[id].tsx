import { useRouter } from 'next/router'
import React, { useState } from 'react'
import type { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'
import DashboardLayout from '@components/DashboardLayout'
import TitlePage from '@components/TitlePage'
import useAuth from '@hooks/useAuth'
import { deleteTitle, editTitle, getTitle } from '@services/movies'
import { toastSuccess } from 'utils/toasts'

const Title: NextPage = () => {
  const { user } = useAuth()
  const { userId } = user || {} // not show if user is not logged in
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const { id: titleId } = router.query

  const { data, isFetched } = useQuery({
    queryKey: ['movie_title'],
    queryFn: () => getTitle({ id: titleId as string, comments: true }),
    initialData: [],
    enabled: !!titleId,
  })

  if (!data.title) {
    return (
      <DashboardLayout title="Title">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold">
            {
              isFetched ? 'Title not found' : 'Loading...'
            }
          </h1>
        </div>
      </DashboardLayout>
    )
  }

  const { title: response, comments } = data

  const titlePageValues = {
    imdbRating: response.imdbRating,
    title: response.Title,
    poster: response.Poster,
    year: response.Year,
    type: response.Type,
    released: response.Released,
    rated: response.Rated,
    runtime: response.Runtime,
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    const comment = (event.target as HTMLFormElement).comment.value

    await editTitle({
      titleId: titleId as string,
      comment,
      userId,
    })

    setIsLoading(false)
    toastSuccess('Comment added successfully')
  }

  const handleDelete = async () => {
    await deleteTitle({ titleId: titleId as string })
    router.push('/dashboard/shows')

    toastSuccess('Title deleted successfully')
  }

  return (
    <DashboardLayout title="Title">
      {
        isFetched && (
          <TitlePage
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}
            comments={comments}
            isLoading={isLoading}
            {...titlePageValues}
          />
        )
      }
    </DashboardLayout>
  )
}

export default Title
