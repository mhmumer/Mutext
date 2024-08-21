import { contentTemplates } from '@/lib/content-templates';
import React from 'react'

interface templateSlugProps {
  templateSlug: string;
}

const TemplatePage = ({ params }: { params: templateSlugProps }) => {
  console.log(params)
  const selectedTemplate = contentTemplates[2]

  return (
    <div className="mx-5 py-2">
      <div className="rounded bg-white px-4 py-6 mt-5">
        <h2 className="font-medium text-black">{selectedTemplate?.name}</h2>
      </div>
            <form >
        <div className="flex flex-col gap-4 p-5 mt-5 bg-white">
          {selectedTemplate?.form?.map((form) => (
            <div key={selectedTemplate.slug}>
              <label>{form.label}</label>
              {form.field === "input" ? (
                <div className="mt-5">
                 
                </div>
              ) : (
                <div className="mt-5">
                  
                </div>
              )}
            </div>
          ))}
        </div>
          </form>
    </div>
  );
};

export default TemplatePage