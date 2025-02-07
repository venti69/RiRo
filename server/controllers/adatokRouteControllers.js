const Employee = require('../models/Patient');

exports.postAdatok = async (req, res) => {
    try {
        const { id } = req.params;
        const { phone, gender, address, ssn, motherName, birthName, birthDate } = req.body;

        // Létrehozunk egy objektumot a frissítéshez, de csak azokat a mezőket adjuk hozzá, amelyek tartalmaznak adatot
        const updateFields = {};

        if (phone) updateFields.phone = phone;
        if (gender) updateFields.gender = gender;
        if (address) updateFields.address = address;
        if (ssn) updateFields.ssn = ssn;
        if (motherName) updateFields.motherName = motherName;
        if (birthName) updateFields.birthName = birthName;
        if (birthDate) updateFields.birthDate = birthDate;

        // Ha nincs semmilyen adat a frissítéshez, akkor visszatérünk hibával
        if (Object.keys(updateFields).length === 0) {
            return res.status(400).json({ msg: "Nem adtál meg adatot a frissítéshez." });
        }

        // Végrehajtjuk az adatbázis frissítést
        await Employee.findByIdAndUpdate({ _id: id }, updateFields);

        res.status(200).json({ msg: "Sikeres frissítés történt!" });

    } catch (error) {
        console.error('Hiba történt a frissítés során:', error);
        res.status(500).json({ msg: "Hiba történt a frissítés során.", error: error.message });
    }
};


/* // User model lekérése.
const User = require('../models/User');

// Általunk telepített npm-csomag
const bcrypt = require('bcrypt');

// Felhasználó regisztrálása.
exports.postRegister = async (req, res) => {
    try {
        const { nev, email, jelszo } = req.body;

        if (!nev || !email || !jelszo) {
            return res
                .status(422)
                .json({ msg: 'Minden mezőt ki kell tölteni!' });
        }

        const emailformat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailformat.test(email)) {
            return res.status(422).json({
                msg: 'Nem megfelelő e-mail cím!',
            });
        }

        if (jelszo.length < 6) {
            return res.status(422).json({
                msg: 'A jelszónak legalább 6 karakter hosszúnak kell lennie!',
            });
        }

        const letezoUser = await User.findOne({ email });

        if (letezoUser) {
            return res.status(409).json({
                msg: 'Ezzel az e-mail címmel már létezik felhasználó!',
            });
        }

        const hashedPassword = await bcrypt.hash(jelszo, 10);
        const newUser = new User({ nev, email, jelszo: hashedPassword });
        await newUser.save();

        return res.status(201).json({ msg: 'Sikeres regisztráció!' });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};
 */