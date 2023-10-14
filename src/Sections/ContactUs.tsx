import { Button, Input, TextField } from '@mui/material';

export const ContactUs = () => {

    const ariaLabel = { 'aria-label': 'description' };
    return (
        <div className='ContactUs' id='ContactUs'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src='https://i.imgur.com/CCtIafA.png' className='img-fluid' />
                    </div>

                    <div className="col-lg-2"></div>

                    <div className="col-lg-3 form">
                        <Input sx={{ mb: 1 }} placeholder='Name' inputProps={ariaLabel} />
                        <Input sx={{ mb: 1 }} placeholder='Email' inputProps={ariaLabel} />
                        <Input sx={{ mb: 3 }} placeholder='Subject' inputProps={ariaLabel} />
                        <TextField
                            sx={{ mb: 3 }}
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            fullWidth
                            rows={3} />

                        <Button variant="outlined"
                            sx={{ border: '1px solid #fff', color: '#fff' }}
                        >Send</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}
