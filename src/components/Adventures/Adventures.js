import React from "react";
import "./Adventures.css";
import { excursionData } from "./excursion-data";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const Adventures = () => {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');

    const handleOpen = (title) => {
        setTitle(title);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }


    return (
        <div className="adventure-page">
            {excursionData.map((excursion) => (
                <div key={excursion.id} className="excursion-card">
                    <img src={excursion.image} width="300" />
                    <div className="excursion-content">
                        <div className="excursion-title">{excursion.excursionTitle}</div>
                        <div className="rating-flex">
                            <i className="fas fa-star stars"></i>
                            <i className="fas fa-star stars"></i>
                            <i className="fas fa-star stars"></i>
                            <i className="fas fa-star stars"></i>
                            <i className="fas fa-star stars"></i>
                            <div className="reviews">{excursion.reviews} Reviews</div>
                        </div>
                        <div className="description">{excursion.excursionDescription}</div>
                        <div className="actions-flex">
                            <button className="view-tour-btn" onClick={() => { handleOpen(excursion.excursionTitle) }} >VIEW TOUR</button>
                            <div className="price">${excursion.cost} USD</div>
                        </div>
                    </div>
                </div>
            ))}

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>Content not available</DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );

}

export default Adventures;