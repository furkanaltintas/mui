import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Buttons() {
  const handleAlert = () => {
    let name = "Furkan";
    alert(name);
  };

  return (
    <div style={{ padding: 20 }}>
      <div>
        <p>Material UI Button</p>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </div>
      <div>
        <hr />
        <p>DISABLED</p>
        <Button variant="contained" disabled>
          Contained disabled
        </Button>
        <Button variant="outlined" disabled>
          Outlined disabled
        </Button>
        <Button variant="text" disabled>
          Text disabled
        </Button>
      </div>
      <div>
        <hr />
        <p>DISABLE ELEVATION</p>
        <Button variant="contained" disableElevation>
          Contained Disable Elevation
        </Button>
        <Button variant="outlined" disableElevation>
          Outlined Disable Elevation
        </Button>
        <Button variant="text" disableElevation>
          Text Disable Elevation
        </Button>
      </div>
      <div>
        <hr />
        <p>HANDLING CLICKS</p>
        <Button variant="contained" onClick={handleAlert}>
          Contained onClick
        </Button>
      </div>
      <div>
        <hr />
        <p>COLOR</p>
        <Button color="success" variant="contained">
          success
        </Button>
        <Button color="error" variant="outlined">
          error
        </Button>
        <Button color="secondary" variant="text">
          secondary
        </Button>
      </div>
      <div>
        <hr />
        <p>SIZE</p>
        <Button size="small" variant="contained">
          Contained size small
        </Button>
        <Button size="medium" variant="outlined">
          Outlined size medium
        </Button>
        <Button size="large" variant="text">
          Text size large
        </Button>
      </div>
      <div>
        <hr />
        <p>ICON AND LABEL</p>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
      </div>
      <div>
        <hr />
        <p>ICON BUTTON COLOR</p>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" disabled color="primary">
          <DeleteIcon />
        </IconButton>
        <IconButton color="primary" aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton color="danger" aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </div>
      <div>
        <hr />
        <p>ICON BUTTON SIZE</p>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" size="large">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div>
        <hr />
        <p>BUTTON COMPONENT</p>
        <Button component={"span"} variant="contained">Contained Component</Button>
        <Button component={"a"} variant="outlined">Outlined Component</Button>
        <Button component={"p"} variant="text">Text Component</Button>
      </div>
      <div>
        <hr />
        <p>BUTTON FULL WIDTH</p>
        <Button fullWidth variant="contained">Contained Full Width</Button>
        <Button fullWidth variant="outlined">Outlined Full Width</Button>
        <Button fullWidth variant="text">Text Full Width</Button>
      </div>
      <div>
        <hr />
        <p>BUTTON SX</p>
        <Button 
        variant="contained" 
        startIcon={<DeleteIcon />} 
        size="small"
        sx={{
          backgroundColor: "blue",
          color: "yellow",
          "&:hover": { // & => Butonun kendisini temsil eder.
            backgroundColor: "orange"
          },
          "& svg": {
            color: "blueviolet"
          }
        }}>Contained sx</Button>
      </div>
    </div>
  );
}

export default Buttons;

/* 
Contained: Dolu arka planlı bir buton.
Outlined: Kenarlıklı ama içi boş bir buton.
Text: Sadece yazı şeklinde butondur, arka plan ve kenarlık yoktur.

------------------------------------------------------------------

disabled: Butonu devre dışı bırakır. Yani kullanıcı tıklayamaz.

disableElevation: Butonun gölgesini (elevation) kapatır.

component: Butonun davranış biçimini değiştirmeye yarar

sx: MUI bileşenlerinde stil vermek için kullanılan özel bir prop'tur.
İçine bir JavaScript nesnesi (object) yazılır.
CSS özellikleri camelCase olarak yazılır.
Temayla entegre çalışabilir (renkler, spacing, breakpoint vs.)

&: & işareti, MUI'nin sx prop'unda kendini temsil eder. Yani bulunduğun bileşeni temsil etmektesin.
*/
