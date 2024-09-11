import Draggable from 'react-draggable';
import Button from '../components/Button/Button';
import { popupContainerStyles, popupStyles } from '../constants/styles';
import { usePopup } from '../hooks/usePopup';
const PopupsProvider = () => {
  const { addPopup, popups, deletePopup } = usePopup();
  const DraggableComponent: any = Draggable;

  return (
    <div style={popupContainerStyles} id="container">
      {popups.map((popup) => (
        <DraggableComponent key={popup.id} bounds="parent">
          <div style={popupStyles}>
            <h4>Title: Popup{popup.type}</h4>
            <p>Component {popup.type}</p>
            <Button
              variant="secondary"
              onClick={() => {
                deletePopup(popup.id);
              }}
            >
              Close
            </Button>
          </div>
        </DraggableComponent>
      ))}
      <Button
        variant="primary"
        onClick={() => addPopup('A')}
        style={{ margin: '10px' }}
      >
        Add A
      </Button>
      <Button
        variant="primary"
        onClick={() => addPopup('B')}
        style={{ margin: '10px' }}
      >
        Add B
      </Button>
    </div>
  );
};

export default PopupsProvider;
