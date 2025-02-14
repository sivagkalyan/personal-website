import React from 'react';
import { useForm } from 'react-hook-form';
import create from 'zustand';

const useResumeStore = create(set => ({
  resumeData: {},
  updateResumeData: (data) => set({ resumeData: data }),
}));

function ResumeForm() {
  const { register, handleSubmit } = useForm();
  const updateResumeData = useResumeStore(state => state.updateResumeData);

  const onSubmit = data => {
    updateResumeData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="resume-form">
      <input {...register('name')} placeholder="Name" />
      <input {...register('jobTitle')} placeholder="Job Title" />
      {/* Add more fields as needed */}
      <button type="submit">Update</button>
    </form>
  );
}

export default ResumeForm; 