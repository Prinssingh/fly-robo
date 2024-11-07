import { Component } from "react";
import LineItems from "../component/home/LineItem/LineItems";
import "../pages/styles/Home.css"
import Curosel from "../component/home/Curosel/Curosel";
import RightComponent from "../component/home/CuroselRightComponent/RightComponent";
import FlyRoboInformation from "../component/home/Fly-Information/FlyRoboInformation";
import Card from "../component/home/card/Card";
import Testemonial from "../component/home/testemonial/Testemonial";




export default class Home extends Component {
  render() {
    const QuickitemsList =[
      {
        image:"https://www.flyrobo.in/image/cache/wp/gj/50-watt-soldering-iron-siron/50-watt-soldering-iron-siron-1%20(3)-550x550.webp",
        des:"50W Soldering Iron - High Quality Solder Product",
        price:"279",
        crossprice: " ₹ 289",
        steacker:"6",
        cadegaryName:"Quick Pick"
      },
      {
        image:"https://www.flyrobo.in/image/cache/wp/gj/solder-wire-40-gsm-for-most-electrical-repair-soldering-purpose/solder-wire-40-gsm-for-most-electrical-repair-soldering-purpose1-550x550.webp",
        des:"Solder Wire 60/40 - 50gm",
        price:"169",
        crossprice:"₹ 168",
        steacker:"1"
      },
      {
        image:"https://www.flyrobo.in/image/cache/wp/gj/m3-ss-hex-nut-10pcs/m3-ss-hex-nut-10pcs-550x550w.webp",
        des:"M3 SS Hex Nut – 10pcs",
        price:"10",
        steacker:"0"
      },
      {
        image:"https://www.flyrobo.in/image/cache/wp/gJ/m3x6mm-pan-philips-head-screw-10pcs/m3x6mm-pan-philips-head-screw-10pcs-550x550w.webp",
        des:"M3x6mm Pan Philips Head Screw - 10pcs",
        price:"18",
steacker:"0"
      },
      {
        image:"https://www.flyrobo.in/image/cache/wp/gj/allen-kay/allen-key-2.5mm-550x550w.webp",
        des:"Allen Key 2.5mm",
        price:"19",
        steacker:"0"
      },
      {
        image:"https://www.flyrobo.in/image/cache/wp/gj/allen-key-3mm/allen-key-3mm3-550x550.webp",
        des:"Allen Key 3mm",
        price:"29",
        steacker:"0"
      },
      {
        image:"https://www.flyrobo.in/image/cache/wp/gj/noel-50w-solder-iron-bit/noel-50w-solder-iron-bit-550x550h.webp",
        des:"50W Solder Iron Bit - High Quality",
        price:"109",
        crossprice:"₹ 139",
        steacker:"22"
      }
  ]
  const itemsL = [
    {
      image:
        "https://www.flyrobo.in/image/cache/wp/gj/1030-3v-flat-mobile-phone-vibration-motor/1030-3v-flat-mobile-phone-vibration-motor-4-550x550.webp",
      des: "1030 Flat Mobile Phone Vibration Motor",
      price: "29",
      steacker:"1",
      name:"item1",
      cadegaryName:"Featured"
    },
    {
      image:
        "https://www.flyrobo.in/image/cache/wp/gj/1034-3v-flat-motor/1034-3v-flat-motor-2-550x550w.webp",
      des: "1034 Flat Mobile Phone Vibration Motor",
      price: "59",
      steacker:"1"

    },
    {
      image:
        "https://www.flyrobo.in/image/cache/wp/gj/dy-11-1a-table-light-dimmer-touch-sensor-switch/dy-11-1a-table-light-dimmer-touch-sensor-switch-5-550x550w.webp",
      des: "DY-11 1A Table Light Dimmer Touch Sensor Switch",
      price: "199",
      steacker:"1"

    },
    {
      image:
        "https://www.flyrobo.in/image/cache/wp/ge/nano3.0-data-logging-expansion-board-welded/nano3.0-data-logging-expansion-board-welded11-550x550.webp",
      des: "NANO3.0 Data Logging Expansion Board",
      price: "578",
      steacker:"1"

    },
    {
      image:
        "https://www.flyrobo.in/image/cache/wp/ge/5v-30v-micro-usb-power-adjustable-delay-relay-timer-control-module/5v-30v-micro-usb-power-adjustable-delay-relay-timer-control-module8-550x550.webp",
      des: "5V-30V Micro USB Power Adjustable Delay Relay Timer Control Module",
      price: "139",
      steacker:"1"

    },
    {
      image:
        "https://www.flyrobo.in/image/cache/wp/gj/dc-dc-12v-3.3v-5v-multi-output-power-supply-module/dc-dc-12v-3.3v-5v-multi-output-power-supply-module-5-550x550w.webp",
      des: "DC-DC 12V to 3.3V 5V Multi-output Power Supply Module",
      price: "37",
      steacker:"1"

    },
    {
      image:
        "https://www.flyrobo.in/image/cache/wp/gj/xbee-bluetooth-bee-usb-adapter-module/xbee-bluetooth-bee-usb-adapter-module-2-550x550w.webp",
      des: "XBee Bluetooth FT232RL USB Adapter Module",
      price: "249",
      steacker:"1"

    },
  ];
  const LikeitemsList = [
    {
      image:
        "https://www.flyrobo.in/image/cache/wp/gj/quadcopter_combo_kit_for_beginner_motor_esc_propeller_flightcontroller/quadcopter-drone-combo-kit-for-beginner--motor-+-esc-+-propeller-+-flight-controller-+-frame-+-tx-rx-simonk-550x550.webp",
      des: "Quadcopter Drone Combo Kit for beginner (Motor + ESC + Propeller + Flight Controller + Frame + TX-RX)",
      price: "12054",
      crossprice: "12999",
      steacker:"7",
      cadegaryName:"You May Like"
    },
    {
      image:
        "https://www.flyrobo.in/image/cache/wp/gj/product/arduino-uno-r3-+-cable-for-arduino-uno-550x550.webp",
      des: "Arduino Uno R3 Compatible board+ Cable for Arduino Uno",
      price: "574",
      crossprice: "1,299",
      steacker:"56"
    },
    {
      image:
        "https://www.flyrobo.in/image/cache/wp/gj/combo/Desktop-550x550.webp",
      des: "Quadcopter Drone Combo Kit for beginner (Motor + ESC + Propeller + Flight Controller + Frame + TX-RX flysky fsi6)",
      price: "13,799",
      crossprice: "16,299",
      steacker:"15"
    },
    {
      image:
        "https://www.flyrobo.in/image/cache/wp/gj/DXW-A2212-Outrunner-Brushless-Motor-1800KV-2-4S-2200KV2450KV-2-3S--Dron/a2212-kv1800-brushless-motor-for-rc-airplane-quadcopter-550x550.webp",
      des: "A2212 1000KV Brushless Motor For RC Airplane / Quadcopter",
      price: "361",
      crossprice: "499",
      steacker:"28"
    },
    {
      image:
        "https://www.flyrobo.in/image/cache/wp/gj/electric-cycle/71ksfb3WDSL._SL1500_-550x550.webp",
      des: "MY1016Z2 250W Motor Combo for Electric Bike / Bicycle (Original Unite)",
      price: "5,723",
      crossprice: "7,499",
      steacker:"24"
    },
    {
      image:
        "https://www.flyrobo.in/image/cache/wp/gj/product2/dji-f450-quadcopter-frame-kit-550x550.webp",
      des: "DJI F450 Quadcopter drone frame Kit with integrated PCB",
      price: "668",
      crossprice: "824",
      steacker:"19"
    },
    {
      image:
        "https://www.flyrobo.in/image/cache/wp/gj/product2/flysky-fs-i6-2.4g-6ch-afhds-rc-transmitter-with-fs-ia6-receiver-550x550h.webp",
      des: "FlySky FS-i6 2.4G 6CH AFHDS RC Transmitter With FS-iA6 Receiver",
      price: "4,369",
      crossprice: "6,499",
      steacker:"33"
    },
  ];
  const ArduinoList =[
    {
        image:
          "https://www.flyrobo.in/image/cache/wp/gj/product/arduino-uno-compatable-board-550x550.webp",
        des: "Arduino UNO R3 Compatible Development Board",
        price: "418",
        crossprice: "1249",
        steacker:"67",
        cadegaryName:"Arduino Boards"

      },
      {
        image:
          "https://www.flyrobo.in/image/cache/wp/gj/product/arduino-uno-r3-+-cable-for-arduino-uno-550x550.webp",
        des: "Arduino Uno R3 Compatible board+ Cable for Arduino Uno",
        price: "574",
        crossprice: "1299",
        steacker:"56"
      },
      {
        image:
          "https://www.flyrobo.in/image/cache/wp/gj/product/arduino-nano-r3-board-with-ch340-chip-soldered-550x550.webp",
        des: "Arduino Nano R3 Compatible Board with CH340 chip SOLDERED",
        price: "240",
        crossprice: "756",
        steacker:"68"
      },
      {
        image:
          "https://www.flyrobo.in/image/cache/wp/gj/product/arduino-nano-r3-board-unsoldered-550x550.webp",
        des: "Arduino nano R3 Compatible Board Unsoldered",
        price: "199",
        crossprice: "500",
        steacker:"60"
      },
      {
        image:
          "https://www.flyrobo.in/image/cache/wp/gj/arduino-uno-r3-smd-board-cable-for-arduino-uno-1/arduino-uno-r3-smd-board-cable-for-arduino-uno-13-550x550.webp",
        des: "Arduino Uno R3 SMD Compatible Development Board",
        price: "319",
        crossprice: "989",
        steacker:"68"
      },
      {
        image:
          "https://www.flyrobo.in/image/cache/wp/gj/arduino-uno-r3-smd/arduino-uno-r3-smd-board-+-cable-for-arduino-uno-550x550.webp",
        des: "Arduino Uno R3 SMD Compatible Board + Cable for Arduino Uno",
        price: "349",
        crossprice: "999",
        steacker:"65"
      },
      {
        image:
          "https://www.flyrobo.in/image/cache/wp/gj/arduino-nano-v3.0-atmega328p-ch340-chip-i-type-c-soldered/arduino-nano-v3.0-atmega328p-ch340-chip-i-type-c-soldered9-550x550.webp",
        des: "Arduino Nano V3.0 ATmega328P CH340 Chip I Type-C UNSOLDERED",
        price: "218",
        crossprice: "499",
        steacker:"56"
      }
]
const MultirotorsListitem=[
  {
      image:"https://www.flyrobo.in/image/cache/wp/gp/rc-aeroplane-kit-motor-plus-esc-plus-propeller-plus-servo-plus-tx-rx/rc-aeroplane-kit-motor-plus-esc-plus-propeller-plus-servo-plus-tx-rx-550x550.webp",
      des:"RC Aeroplane Kit ( Motor + ESC + Propeller + Servo + TX-RX)",
      price:"4449",
      crossprice:"₹ 5499",
      steacker:"19",
      cadegaryName:"Multirotors"

  },
  {
      image:"https://www.flyrobo.in/image/cache/wp/gj/drone-accessories-combo-4-x-motorand-4-x-escand-2-x-1045-propellerand-1-x-f450-frameand-strap-belt/drone-accessories-combo-4-x-motorand-4-x-escand-2-x-1045-propellerand-1-x-f450-frameand-strap-belt1-550x550.webp",
      des:"Drone Accessories Combo (4 x Motor, 4 x ESC, 2 x 1045 Propeller, 1 x F450 Frame, Strap Belt)",
      price:"3099",
      crossprice:"",
      steacker:"0"
  },
  {
      image:"https://www.flyrobo.in/image/cache/wp/gj/hexacopter-drone-accessories-combo-6-x-motorand-6-x-escand-3-x-1045-propellerand-1-x-f550-frameand-strap-belt/hexacopter-drone-accessories-combo-6-x-motorand-6-x-escand-3-x-1045-propellerand-1-x-f550-frameand-strap-belt1-550x550.webp",
      des:"Hexacopter Drone Accessories Combo (6 x Motor, 6 x ESC, 3 x 1045 Propeller, 1 x F550 frame, Strap Belt)",
      price:"6249",
      crossprice:"₹ 7999",
      steacker:"22"
  },
  {
      image:"https://www.flyrobo.in/image/cache/wp/gj/rc-aeroplane-kit-motor-plus-esc-plus-propeller-plus-servo-plus-tx-rx-fsi6/rc-aeroplane-kit-motor-plus-esc-plus-propeller-plus-servo-plus-tx-rx-fsi6-550x550.webp",
      des:"RC Aeroplane Kit ( Motor + ESC + Propeller + Servo + TX-RX (FSI6))",
      price:" 6099",
      crossprice:"₹ 7499",
      steacker:"19"
  },
  {
      image:"https://www.flyrobo.in/image/cache/wp/gj/quadcopter-drone-combo-with-radiolink-crossflight/quadcopter-drone-combo-with-radiolink-crossflight-550x550.webp",
      des:"Quadcopter Drone Combo with radiolink Crossflight Kit (Motor + ESC + Propeller + Flight Controller + Frame + TX-RX Flysky FSi6+ Power module + Belt) | FlyRobo",
      price:" 13999",
      crossprice:"₹ 24549",
      steacker:"43"
  },
  {
      image:"https://www.flyrobo.in/image/cache/wp/gj/hexacopter-drone-combo-with-radiolink-crossflight-kit2/hexacopter-drone-combo-with-radiolink-crossflight-kit21-550x550.webp",
      des:"Hexacopter Drone Combo with radiolink Crossflight Kit (Motor + ESC + Propeller + Flight Controller + Frame + TX-RX Flysky FSi6 + Belt)",
      price:"15999",
      crossprice:"₹ 16999",
      steacker:"6"
  },
  {
      image:"https://www.flyrobo.in/image/cache/wp/gj/combo/Drone-combo-pixhawk3-550x550.webp",
      des:"Quadcopter Drone Combo with Pixhawk Kit for beginner (Motor + ESC + Propeller + Flight Controller + Frame + TX-RX Flysky FSi6+ Power module + Belt)",
      price:" 20999",
      crossprice:"₹ 24549",
      steacker:"14"
  }
]
const FlightControllerList =[
  {
      image:"https://www.flyrobo.in/image/cache/wp/gp/arducopter-apm-2.8-flight-control-board-for-rc-multi-rotor-drone/arducopter-apm-2.8-flight-control-board-for-rc-multi-rotor-drone-550x550.webp",
      des:"ARDUCOPTER APM 2.8 Flight Control Board for RC Multi Rotor Drone",
      price:"5176",
      crossprice:"6999",
      steacker:"26",
      cadegaryName:"Flight controller and Rc Transmitter"

  },
  {
      image:"https://www.flyrobo.in/image/cache/wp/gj/product2/kk2.1.5-lcd-flight-controll-board-for-fpv-racing-drone-550x550.webp",
      des:"KK2.1.5 LCD Flight Controll Board for FPV Racing Drone | e | kk flight controller",
      price:"4307",
      crossprice:"5901",
      steacker:"27"
  },
  {
      image:"https://www.flyrobo.in/image/cache/wp/gj/product2/flysky-fs-i6-2.4g-6ch-afhds-rc-transmitter-with-fs-ia6-receiver-550x550h.webp",
      des:"FlySky FS-i6 2.4G 6CH AFHDS RC Transmitter With FS-iA6 Receiver",
      price:"4369",
      crossprice:"6499",
      steacker:"33"
  },
  {
      image:"https://www.flyrobo.in/image/cache/wp/gj/FlySky-FS-CT6B-FS-CT6B-24G-6CH-Radio-Set-System--TX-FS-CT6B--RX-FS-R6B-/flysky-fs-ct6b-2.4g-6ch-radio-set-system-with-rx-fs-r6b-receiver2-550x550.webp",
      des:"FlySky FS-CT6B 2.4G 6CH Radio Set System with RX FS-R6B receiver.",
      price:"2483",
      crossprice:"3499",
      steacker:"29"
  },
  {
      image:"https://www.flyrobo.in/image/cache/wp/gj/pixhawk_px4_32bits_flight_controller/pixhawk_px4_32bits_flight_controller-5-550x550w.webp",
      des:"Pixhawk 2.4.8 PX4 32 Bit Flight Controller with Safety Switch and Buzzer for Drone High Quality",
      price:"11070",
      crossprice:"13599",
      steacker:"19"
  },
  {
      image:"https://www.flyrobo.in/image/cache/wp/gj/Pixhawk-PIX-248--PX4-Autopilot-PIX-248-32-Bit-Flight-Controller-with-Sa/pixhawk-combo-550x550.webp",
      des:"Pixhawk PX4 Autopilot 2.4.8 32 Bit Flight Controller kit",
      price:"13555",
      crossprice:"15799",
      steacker:"14"
  },
  {
      image:"https://www.flyrobo.in/image/cache/wp/gj/FlySky-FS-i6-2.4G-6CH-AFHDS-Transmitter-With-FS-iA6B-Receiver/flysky-fs-ia6-6ch-afhds-2a-2.4g-radio-receiver-550x550.webp",
      des:"Flysky FS-IA6 6CH AFHDS 2A 2.4G Radio Receiver",
      price:"980",
      crossprice:"1500",
      steacker:"35"
  }
]
const Ebikelist=[
  {
      image:"https://www.flyrobo.in/image/cache/wp/gj/my1016-250w-24v-dc-motor-with-gear-for-e-bike-electric-bicycle-original-unite/my1016-250w-24v-dc-motor-with-gear-for-e-bike-electric-bicycle-original-unite-3-550x550.webp",
      des:"MY1016 250W 24V DC Motor with gear for E-Bike | Electric bicycle - Original Unite",
      price:"3275",
      crossprice:"3899",
      steacker:"16",
      cadegaryName:"E-Bike"

  },
  {
      image:"https://www.flyrobo.in/image/cache/wp/gj/twist-throttle-grip-accelerator-for-e-bike/twist-throttle-grip-accelerator-for-e-bike-550x550h.webp",
      des:"Twist Throttle Grip Accelerator for E-bike",
      price:"293",
      crossprice:"385",
      steacker:"24"
  },
  {
      image:"https://www.flyrobo.in/image/cache/wp/gj/electric-cycle/71ksfb3WDSL._SL1500_-550x550.webp",
      des:"MY1016Z3 350W Motor Combo for Electric Bike / Bicycle (Original Unite)",
      price:"8999",
      crossprice:"9399",
      steacker:"4"
  },
  {
      image:"https://www.flyrobo.in/image/cache/wp/gj/electric-cycle/my1016-350w-motor-+-motor-controller-+-twist-throttle-for-diy-electric-bicycle-kit-550x550.webp",
      des:"MY1016 350W Motor + Motor Controller + Twist throttle for DIY ELECTRIC BICYCLE KIT",
      price:"4808",
      crossprice:"6399",
      steacker:"25"
  },
  {
      image:"https://www.flyrobo.in/image/cache/wp/gp/electric-cycle/TECH1083_a_1024x1024-550x550w.webp",
      des:"MY1016 350W 24V DC Motor for E-Bike",
      price:"3899",
      crossprice:"4599",
      steacker:"15"
  },
  {
      image:"https://www.flyrobo.in/image/cache/wp/gj/electric-cycle/my1016-250w-motor-+-motor-controller-+-twist-throttle-for-diy-electric-bicycle-kit-550x550h.webp",
      des:"MY1016 250W Motor + Motor Controller + Twist throttle for DIY ELECTRIC BICYCLE KIT",
      price:"2759",
      crossprice:"4399",
      steacker:"37"
  },
  {
      image:"https://www.flyrobo.in/image/cache/wp/gp/electric-cycle/TECH1083_a_1024x1024-550x550w.webp",
      des:"MY1016 250W 24V DC Motor for E-Bike | Electric bicycle - Original Unite",
      price:"1947",
      crossprice:"2999",
      steacker:"33"
  }
]
    return (
      <>
       <div className="">
        <LineItems/>
       </div>
       <div className="Curosalmaindiv">
       <div className="curosal">
        <Curosel/>
      <RightComponent/>
       </div>
       </div>
       <div className="destination">
      <FlyRoboInformation/>
       </div>
       <div className="cardComponent">
        <Card  
              item={itemsL}    />
        </div>
        <div className="Quick-Pick">
        <Card
             item={QuickitemsList}
         />
       </div>

       <div className="Quick-Pick">
        <Card
             item={LikeitemsList}
         />
       </div>
       <div className="Quick-Pick">
        <Card
             item={ArduinoList}
         />
       </div>
       <div className="Quick-Pick">
        <Card
             item={MultirotorsListitem}
         />
       </div>
       <div className="Quick-Pick">
        <Card
             item={FlightControllerList}
         />
       </div>
       <div className="Quick-Pick">
        <Card
             item={Ebikelist}
         />
       </div>
       <div className="testemonial">
        <Testemonial/>
       </div>
       <div className="productdetail">
      <LineItems/>
       </div>

      </>
    );
  }
}
