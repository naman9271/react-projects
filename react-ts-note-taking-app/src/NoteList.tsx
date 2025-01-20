import Select from 'react-select'
import { Row, Col, Button, Form, Card, Badge, Modal } from 'react-bootstrap'
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { Tag } from './App'
import { useMemo, useState } from 'react'
import styles from './NoteList.module.css'

type SimplifiedNote={
    title:string,
    id:string,
    tags: Tag[]
}

type NoteListProps = {
    availableTags: Tag[]
    notes: SimplifiedNote[]
    onUpdateTag:(id:string,lable:string)=>void
    onDeleteTag:(id:string)=>void
}
type EditTagModalProps={
    availableTags: Tag[],
    show:boolean,
    handleClose:()=>void,
    onUpdateTag:(id:string,lable:string)=>void,
    onDeleteTag:(id:string)=>void,
    editTagModalIsOpen:boolean
    setEditTagModalIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}

function NoteList({ availableTags, notes,onDeleteTag,onUpdateTag }: NoteListProps) {
    const [selectedTags, setSelectedTags] = useState<Tag[]>([])
    const [title, setTitle] = useState<string>("")
    const[editTagModalIsOpen,setEditTagModalIsOpen]=useState<boolean>(false)

    const filteredNotes = useMemo(() => {
        return notes.filter(note => {
            return (title == "" || note.title.toLowerCase().includes(title.toLowerCase())) &&
                (selectedTags.length === 0 ||
                    selectedTags.every(tag =>
                        note.tags.some(noteTag => noteTag.id == tag.id)))
        })
    }, [title, selectedTags, notes])
    return (
        <>
            <Row className='align-items-center mb-4'>
                <Col><h1>Notes</h1></Col>
                <Col xs='auto'>
                    <Stack gap={2} direction='horizontal'>
                        <Link to='/new'>
                            <Button variant='primary'>Create</Button>
                        </Link>
                        <Button variant='outline-secondary' onClick={()=>{
                            setEditTagModalIsOpen(!editTagModalIsOpen)
                        }}>Edit Tags</Button>
                    </Stack>
                </Col>
            </Row>
            <Form>
                <Row className='mb-4'>
                    <Col>
                        <Form.Group controlId='title'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type='text' value={title} onChange={e => setTitle(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="Tags">
                            <Form.Label>Tags</Form.Label>
                            <Select isMulti
                                options={availableTags.map(tag => {
                                    return { label: tag.label, value: tag.id }
                                })}
                                value={selectedTags.map(tag => {
                                    return { label: tag.label, value: tag.id }
                                })}
                                onChange={tags => {
                                    setSelectedTags(
                                        tags.map(tag => {
                                            return { label: tag.label, id: tag.value }
                                        })
                                    )
                                }}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
                {filteredNotes.map(note => (
                    <Col key={note.id}>
                        <NoteCard id={note.id} title={note.title} tags={note.tags}/>
                    </Col>
                ))}
            </Row>
            <EditTagModal editTagModalIsOpen={editTagModalIsOpen} setEditTagModalIsOpen={setEditTagModalIsOpen} onUpdateTag={onUpdateTag} onDeleteTag={onDeleteTag} show={editTagModalIsOpen} availableTags={availableTags} handleClose={()=>{
                setEditTagModalIsOpen(!editTagModalIsOpen)
            }}  />
        </>
    )
}

export default NoteList

function NoteCard({id,title,tags}:SimplifiedNote){
    return(
        <>
        <Card as={Link} to={`/${id}`} className={`h-100 text-reset text-decoration-none ${styles.card}`}>
            <Card.Body>
                <Stack gap={2} className="align-items-center justify-content-center h-100">
                <span className="fs-2">{title}</span>
                    {tags.length >0 && (
                        <Stack gap={1} direction='horizontal' className='flex-wrap justify-content-center'>
                            {tags.map(tag=>(
                                <Badge key={tag.id} className='text-truncate '>{tag.label}</Badge>
                            ))}
                        </Stack>
                    )}
                </Stack>
            </Card.Body>
        </Card>
        </>
    )
}

function EditTagModal({availableTags,handleClose,show,onDeleteTag,onUpdateTag,editTagModalIsOpen,setEditTagModalIsOpen}:EditTagModalProps){
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Tags</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Stack gap={2}>
                        {availableTags.map(tag=>(
                            <Row key={tag.id}>
                                <Col>
                                <Form.Control value={tag.label} type="text" onChange={e=>{onUpdateTag(tag.id,e.target.value)}}/>
                                </Col>
                                <Col xs='auto'>
                                <Button onClick={()=>onDeleteTag(tag.id)} variant='outline-danger'>&times;</Button>
                                </Col>
                            </Row>
                        ))}
                    </Stack>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='primary' onClick={()=>{
                setEditTagModalIsOpen(!editTagModalIsOpen)
            }}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}