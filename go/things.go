package things

import "fmt"

// This file adds methods to the types generated via protoc

// Validate returns an error if the Thing is invalid.
func (thing Thing) Validate() error {
	if thing.Id == 0 {
		return fmt.Errorf("id is required")
	}
	if thing.Name == "" {
		return fmt.Errorf("name is required")
	}
	return nil
}

func (thing Thing) IsValid() bool {
	return thing.Validate() == nil
}

func (thing Thing) Exists() bool {
	return thing.Id != 0
}

// New creates a new Thing
func New(id uint64, name string) *Thing {
	return &Thing{
		Id:   id,
		Name: name,
	}
}
