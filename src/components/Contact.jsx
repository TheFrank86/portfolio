import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

// service_spzzy1p
// template_h6va8ls
// TnUb7TDxGt2Z4I4l3
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_spzzy1p',
      'template_h6va8ls',
      {
        from_name: form.name,
        to_name: 'Frank',
        from_email: form.email,
        to_email: 'thefrank86@gmail.com',
        message: form.message,
      },
      'TnUb7TDxGt2Z4I4l3'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you so much.  I will get back to you soon.');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false);

      console.log(error);

      alert('Sorry, something went wrong.');
    })
  }

  return (
    <div className="xl:mt-12 flex-col flex gap-10 overflow-hidden justify-center items-center w-full mx-auto">
      <motion.div
        variants={slideIn('left', 'spring', 0.2, 1)}
        className="w-2/3 flex-[1] bg-black-100 p-8 rounded-2xl"
      > 
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea 
              rows="7" 
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium rounded-xl"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <div className={`${styles.footer} space-x-8`}>
        <div>Code/Design &copy; 2024 Frank Evans</div>
        <div>Song "One Cosmos" distributed by <a href="https://www.youtube.com/watch?v=25LEeXuHclc" target="_blank" className="text-blue-500 underline">Wee Free Music</a></div>
      </div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");