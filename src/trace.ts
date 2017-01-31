import * as THREE from "three"

export class Trace {

    private _mesh: THREE.Mesh;
    private _velocity: THREE.Vector3;

    constructor(pos: THREE.Vector3) {

        this._velocity = <THREE.Vector3>{
            x: -1 * 0.5,
            y: -2.3 * 0.5,
            z: 0 * 0.5,
        }

        var geometry = new THREE.PlaneBufferGeometry(1, 10);
        var material = new THREE.MeshBasicMaterial();
        this._mesh = new THREE.Mesh(geometry, material);
        this._mesh.position.x = pos.x - this._velocity.x * 5;
        this._mesh.position.y = pos.y - this._velocity.y * 5;
        this._mesh.position.z = pos.z - this._velocity.z * 5;

        this._mesh.rotation.z = Math.atan2(this._velocity.y, this._velocity.x) + Math.PI / 2;
    }

    getObject(): THREE.Object3D {
        return this._mesh;
    }

    update(deltaSeconds: number) {
        this._mesh.position.x += this._velocity.x * deltaSeconds;
        this._mesh.position.y += this._velocity.y * deltaSeconds;
        this._mesh.position.z += this._velocity.z * deltaSeconds;
    }

}