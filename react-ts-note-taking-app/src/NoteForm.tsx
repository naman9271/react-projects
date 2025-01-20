import { Form, Stack, Row, Col, Button } from 'react-bootstrap'
import CreatableReactSelect from 'react-select/creatable'
import { Link,useNavigate } from 'react-router-dom'
import { FormEvent, useRef, useState } from 'react'
import { NoteData, Tag } from './App'
import { v4 as uuidV4 } from 'uuid'


type NoteFormProps={
    onSubmit:(data:NoteData)=>void
    onAddTag:(tag:Tag)=>void
    availableTags:Tag[]
}& Partial<NoteData>

//telling partial data 

function NoteForm({onSubmit ,onAddTag ,availableTags, title = "", markdown = "", tags = [] }:NoteFormProps) {
    const titleRef=useRef<HTMLInputElement>(null)
    const markdownRef=useRef<HTMLTextAreaElement>(null)
    const [selectedTags,setSelectedTags]=useState<Tag[]>(tags)
    const navigate =useNavigate()

    function handleSubmit(e:FormEvent){
        e.preventDefault();
        onSubmit({
            title:titleRef.current!.value, // ! --> bole toh ki ye values kabhi null nhi honi chiaye
            markdown:markdownRef.current!.value,
            tags:selectedTags
        })
        navigate("..")
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <Form.Group controlId="Title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control ref={titleRef} defaultValue={title} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="Tags">
                            <Form.Label>Tags</Form.Label>
                            <CreatableReactSelect isMulti 
                            onCreateOption={label=>{
                                const newTag={id:uuidV4(),label}
                                setSelectedTags(prev=>[...prev,newTag])
                                onAddTag(newTag)
                            }}
                            options={availableTags.map(tag=>{
                                return {label:tag.label ,value:tag.id}
                            })}
                            value={selectedTags.map(tag=>{
                                return {label:tag.label ,value:tag.id}
                            })}
                            //tags are the new updated array that will return on onChane whrn we select create delete the option onchange take the selected array 
                            onChange={tags=>{
                                setSelectedTags(
                                    tags.map(tag=>{
                                      return {label:tag.label ,id:tag.value}
                                    })
                                )
                            }}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Label controlId ='body'>Body</Form.Label>
                    <Form.Control required ref={markdownRef} defaultValue={markdown} as='textarea' rows={12}/>
                </Form.Group>
                <Stack direction='horizontal' gap={2} className='justify-content-end'>
                    <Button type='submit' variant='primary'>Save</Button>
                    <Link to="..">
                    <Button type='button' variant='outline-secondary'>Cancel</Button>
                    </Link>
                    
                </Stack>
            </Stack>


        </Form>
    )
}

export default NoteForm