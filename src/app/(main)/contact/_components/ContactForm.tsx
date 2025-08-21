'use client'

import ButtonSecondary from "@/app/_components/buttons/ButtonSecondary"
import TextArea from "@/app/_components/form-inputs/TextArea"
import TextInput from "@/app/_components/form-inputs/TextInput"
import { H4 } from "@/app/_components/Headings"
import { useState } from "react"
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify"
import { reactToastifyDark } from "@/app/_utils/reactToastify"

const FormInput = {
  name: '',
  email: '',
  message: ''
}

export default function ContactForm() {
  const [data, setData] = useState(FormInput)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
    setErrors({ ...errors, [name]: '' }) // clear error while typing
  }

  const validate = () => {
    let newErrors: { [key: string]: string } = {}
    if (!data.name.trim()) newErrors.name = "Name is required"
    if (!data.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Invalid email format"
    }
    if (!data.message.trim()) newErrors.message = "Message is required"
    return newErrors
  }

  async function postData(e: React.FormEvent) {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      toast.error("Please fix the errors before submitting.", reactToastifyDark)
      return
    }

    setIsSubmitting(true)
    try {
      const body = `\
        Name: ${data.name.trim()}
        Email: ${data.email.trim()}
        Message: ${data.message.trim()},
      `.trim()

      const emailData = {
        title: "TRAYAK CONTACT FORM",
        name: data.name.trim(),
        message: body,
        email: data.email.trim(),
      }

      const res = await emailjs.send(
        "service_2wt9rqq",
        "template_7otdjj1",
        emailData,
        'Iux6YA2-1fhQi4hT7'
      )

      console.log('res', res)


      toast.success("Message sent successfully.", reactToastifyDark)
      setData(FormInput) // reset form
    } catch (err) {
      toast.error("Failed to send message. Please try again later.", reactToastifyDark)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={postData}>
      <H4 title='Contact Us' />
      <div className='h-[1rem]' />

      <div className="mb-4">
        <TextInput
          label='Name'
          name="name"
          handleInput={handleInput}
          data={data.name}
          placeholder="Enter Name..."
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <TextInput
          label='Email'
          name="email"
          handleInput={handleInput}
          data={data.email}
          placeholder="Enter Email..."
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <TextArea
          label='Message'
          name="message"
          handleInput={handleInput}
          data={data.message}
          placeholder="Enter Message..."
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>

      <ButtonSecondary
        title={isSubmitting ? "Processing..." : "Submit"}
        css="w-full rounded-xl text-black py-4 w-[10rem]"
      />
    </form>
  )
}
